import { useForm, Link } from "@inertiajs/react";
import React from "react";

const Show = ({ post }) => {
    const { delete: destroy, get } = useForm();
    const onsubmit = (e) => {
        e.preventDefault();
        destroy(`/post/${post.id}`);
    };
    const update = (e) => {
        e.preventDefault();
        get(`/posts/${post.id}/edit`);
    };
    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Posted on:</span>
                    <span>
                        {new Date(post.created_at).toLocaleDateString()}
                    </span>
                </div>
                <p className="font-medium">{post.body}</p>
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={onsubmit}>
                        <button className="text-white bg-red-500 py-1 px-2 rounded">
                            Delete
                        </button>
                    </form>
                    <Link
                        onClick={update}
                        className="text-white bg-green-500 py-1 px-2 rounded"
                    >
                        Update
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Show;
