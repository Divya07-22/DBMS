import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = {
    loginContainer: {
        width: "400px",
        margin: "auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        marginTop: "10%",
    },
    h1: {
        textAlign: "center",
        marginBottom: "20px",
    },
    error: {
        color: "red",
        marginBottom: "10px",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "10px",
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "5px 0",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
    },
};

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("authToken", data.token);
                if (data.user.role === "coordinator") {
                    navigate("/coordinator/dashboard");
                } else if (data.user.role === "faculty") {
                    navigate("/faculty/dashboard");
                } else {
                    setError("Unknown user role.");
                }
            } else {
                setError(data.error || "Invalid login credentials.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        }
    };

    return (
        <div style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
            <div style={style.loginContainer}>
                <h1 style={style.h1}>Login</h1>
                {error && <div style={style.error}>{error}</div>}
                <form style={style.form} onSubmit={handleLogin}>
                    <label style={style.label}>
                        Email:
                        <input
                            style={style.input}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label style={style.label}>
                        Password:
                        <input
                            style={style.input}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button style={style.button} type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
