/**
 * Interfaces matching behaviours are easier to mock things during testing.
 */
export interface CanRequestLogin {
    requestLogin(
        email: string,
        password: string,
    ): Promise<{ uid: string; email: string }>;
}
