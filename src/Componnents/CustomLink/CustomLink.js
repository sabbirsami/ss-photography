import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{
                    fontSize: "17px",
                    padding: "10px",
                    textDecoration: "none",
                    color: match ? "#FFC014" : "white",
                    borderBottom: match ? "2px solid #FFC014" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;
