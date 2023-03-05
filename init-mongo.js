db.createUser(
    {
        user: "user",
        pwd: "pwd",
        roles: [
            {
                role: "readWrite",
                db: "dev"
            }
        ]
    }
);
db.createCollection("test");
