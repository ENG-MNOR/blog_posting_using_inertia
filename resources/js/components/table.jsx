import React from "react";

const Table = ({ post }) => {
    return (
        <tbody>
            <tr>
                <td>{post.id}</td>
                <td>{post.body}</td>
                <td>
                    <a href={`/posts/${post.id}`} className="text-link">
                        Read More...
                    </a>
                </td>
            </tr>
        </tbody>
    );
};

export default Table;
