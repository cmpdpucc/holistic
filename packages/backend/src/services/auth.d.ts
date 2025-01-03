export declare const authService: {
    signUp(email: string, password: string): Promise<{
        user: import("@supabase/auth-js").User | null;
        session: import("@supabase/auth-js").Session | null;
    }>;
    signIn(email: string, password: string): Promise<{
        user: import("@supabase/auth-js").User;
        session: import("@supabase/auth-js").Session;
        weakPassword?: import("@supabase/auth-js").WeakPassword;
    }>;
    signOut(): Promise<void>;
};
