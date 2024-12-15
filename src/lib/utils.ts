import * as message from 'mvc-lib/message';
import * as mvc from 'mvc-lib';

export const isAllValue = function (checkList: any[], patten: any) {
  for (const b of checkList) {
    if (b !== patten) {
      return false;
    }
  }
  return true;
};

export function catchError() {
  return function (
    target: object,
    key: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const childFunction = descriptor.value;
    descriptor.value = async function (...args: any) {
      try {
        await childFunction.apply(this, args);
      } catch (e) {
        console.log('DecoratorName', key, e);
      }
    };
    return descriptor;
  };
}

export const verifySignatureMvc = (
  publicKey: string,
  text: string,
  signature: string,
) => {
  const publicKeyObj = mvc.PublicKey.fromHex(publicKey);
  const messageHash = mvc.crypto.Hash.sha256(Buffer.from(text));
  const sigDER = Buffer.from(signature, 'base64');
  const sigObj = mvc.crypto.Signature.fromDER(sigDER);
  return mvc.crypto.ECDSA.verify(messageHash, sigObj, publicKeyObj);
};

export const verifySignatureMvcNew = (
  publicKey: string,
  text: string,
  signature: string,
) => {
  const publicKeyObj = mvc.PublicKey.fromHex(publicKey);
  const messageHash = mvc.crypto.Hash.sha256(
    Buffer.from('MVC Signed Message:\n' + text),
  );
  const sigDER = Buffer.from(signature, 'base64');
  const sigObj = mvc.crypto.Signature.fromDER(sigDER);
  return mvc.crypto.ECDSA.verify(messageHash, sigObj, publicKeyObj);
};

export const verifySignatureMvcNew2 = (
  publicKey: string,
  text: string,
  signature: string,
) => {
  const publicKeyObj = mvc.PublicKey.fromHex(publicKey);
  const messageHash = mvc.crypto.Hash.sha256(
    Buffer.from('Bitcoin Signed Message:\n' + text),
  );
  const sigDER = Buffer.from(signature, 'base64');
  const sigObj = mvc.crypto.Signature.fromDER(sigDER);
  return mvc.crypto.ECDSA.verify(messageHash, sigObj, publicKeyObj);
};

export function verifyMessageBtc(publicKey: string, text: string, sig: string) {
  const msg = message(text);

  const signature = mvc.crypto.Signature.fromCompact(
    Buffer.from(sig, 'base64'),
  );
  const hash = msg.magicHash();

  // recover the public key
  const ecdsa = new mvc.crypto.ECDSA();
  ecdsa.hashbuf = hash;
  ecdsa.sig = signature;

  const pubkeyInSig = ecdsa.toPublicKey();

  const pubkeyInSigString = new mvc.PublicKey(
    Object.assign({}, pubkeyInSig.toObject(), { compressed: true }),
  ).toString();
  if (pubkeyInSigString != publicKey) {
    return false;
  }

  return mvc.crypto.ECDSA.verify(hash, signature, pubkeyInSig);
}

export function verifyMessage(publicKey: string, text: string, sig: string) {
  let btc = false;
  let mvc = false;
  let mvcNew = false;
  let mvcNew2 = false;
  try {
    btc = verifyMessageBtc(publicKey, text, sig);
  } catch (e) {}
  try {
    mvc = verifySignatureMvc(publicKey, text, sig);
  } catch (e) {}
  try {
    mvcNew = verifySignatureMvcNew(publicKey, text, sig);
  } catch (e) {}
  // verifySignatureMvcNew2
  try {
    mvcNew2 = verifySignatureMvcNew2(publicKey, text, sig);
  } catch (e) {}
  return btc || mvc || mvcNew || mvcNew2;
}

export function toHexHdPath(addressPathString: string) {
  const addressHexPath = Buffer.from(addressPathString, 'ascii').toString(
    'hex',
  );
  const m = Buffer.from(addressHexPath, 'hex');
  return `m/${m.join('/')}`;
}
