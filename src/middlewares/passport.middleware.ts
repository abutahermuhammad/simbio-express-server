import { debug } from "util";

export const passportConfig = () => {

    // TODO: Add passport config
    // passport.serializeUser(UserControllers.serializeUser);
    // passport.deserializeUser(UserControllers.deserializeUser);

    // TODO: Add google passport config
    // passport.use(GoogleStrategy);


}

export function passportSerializer(user: object, done: (error?: Error | null, user?: object) => void) {
    debug("Serializing user...");
    // Extract essential user information for session storage (e.g., ID or username)

    // Return the serialized user object and an optional error
    done(null, user);
}

export function passportDeserializer(user: object, done: (error?: Error | null, user?: object) => void) {
    debug("Deserializing user...");
    done(null, user);
}