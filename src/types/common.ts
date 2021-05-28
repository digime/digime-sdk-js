import * as t from "io-ts";

export interface BasicOAuthOptions {
    applicationId: string;
    contractId: string;
    privateKey: string;
    redirectUri: string;
}

export const BasicOAuthOptionsCodec: t.Type<BasicOAuthOptions> = t.type({
    applicationId: t.string,
    contractId: t.string,
    privateKey: t.string,
    redirectUri: t.string,
});