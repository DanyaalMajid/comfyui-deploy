import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  // debug: true,
  publicRoutes: ["/", "/api/(.*)", "/docs(.*)", "/share(.*)"],
  async afterAuth(auth, req, evt) {
    // Parse the URL to get the pathname
    const url = new URL(req.url);

    if (!auth.userId && !auth.isPublicRoute) {
      // Load Clerk callback URL from environment variables
      const clerkCallbackUrl = process.env.NEXT_PUBLIC_CLERK_CALLBACK_URL || "";
      // If Clerk callback URL is set in env, use it; otherwise, use the request origin
      const callbackUrl = clerkCallbackUrl || url.origin;
      return redirectToSignIn({ returnBackUrl: callbackUrl });
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
