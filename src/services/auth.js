import { supabase } from "./supabaseInit";

export const AuthService = {
  getSession() {
    return JSON.parse(localStorage.getItem("supabase.auth.token"))
      ?.currentSession;
  },

  getCurrentUser() {
    return supabase.auth.user();
  },

  async refreshSession() {
    return await supabase.auth.refreshSession();
  },

  async login(args) {
    const { email, password, provider } = args;

    return await supabase.auth.signIn({
      email,
      password,
      provider
    });
  },

  async logout() {
    const { error } = supabase.authl.signOut();

    if (error) {
      throw error;
    }
  },

  async userExists(email) {
    try {
      let { data } = await supabase
        .from("users")
        .select("id, name")
        .eq("email", email);

      return data !== null;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  },

  async register(args) {
    const { email, password } = args;
    return await supabase.auth.signUp({ email, password });
  }
};
