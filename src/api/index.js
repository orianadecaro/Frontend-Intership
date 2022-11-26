export function login({ email, password }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "elon@mercdev.com" && password === "twitter") {
          resolve({ data: { avatar: "/user.jpeg", name: "Elon" } });
        } else {
          resolve({ error: "Incorrect email or password" });
        }
      }, 1000);
    });
  }