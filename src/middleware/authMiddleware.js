router.get(
    "/profile",
    authMiddleware,
    getProfile
);