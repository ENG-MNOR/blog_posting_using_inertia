import React from "react";
import Layout from "../layouts/layout";
import { useForm, usePage } from "@inertiajs/react";

const Update = ({ post }) => {
    const { data, setData, errors, patch, processing } = useForm({
        body: post.body,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(`/posts/${post.id}`);
    };

    return (
        <div>
            <Layout />
            <h1 className="title pt-5">Update Post</h1>
            <form className="w-1/2 mx-auto" onSubmit={submit}>
                <textarea
                    rows={10}
                    name="body"
                    value={data.body}
                    onChange={(e) => setData("body", e.target.value)}
                ></textarea>
                {errors.body && (
                    <div className="text-red-500">{errors.body}</div>
                )}
                <button className="primary-btn mt-4" disabled={processing}>
                    update
                </button>
            </form>
        </div>
    );
};

export default Update;
