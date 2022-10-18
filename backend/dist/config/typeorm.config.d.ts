declare const _default: () => {
    nodeEnv: string;
    database: {
        host: string;
        port: number;
        user: string;
        pass: string;
        name: string;
    };
    auth: {
        jwt_secret_key: string;
        JWT_EXPIRATION_TIME: number;
    };
};
export default _default;
