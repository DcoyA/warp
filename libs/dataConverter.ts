/**
 * cookie에 저장을 위한 Encoder / Decoder
 *
 * TextEncoder를 DI적용해 변수로 받아 사용
 * static 메소드로 메모리 절약
 */
export class DataConverter {
  static encode(
    input: string,
    encoder: TextEncoder = new TextEncoder()
  ): Uint8Array {
    return encoder.encode(input);
  }

  static decode(
    cookie: string,
    decoder: TextDecoder = new TextDecoder()
  ): string {
    const convertedCookie: Uint8Array = this.convertStringToUnit8Array(cookie);
    return decoder.decode(convertedCookie);
  }

  static convertStringToUnit8Array(cookie: string): Uint8Array {
    const parsedCookie = JSON.parse(cookie);
    const processed: number[] = Object.values(parsedCookie);
    return new Uint8Array(processed);
  }
}
