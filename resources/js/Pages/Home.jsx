import { Head, Link, usePage } from "@inertiajs/react";
import Layout from "../layouts/layout";
import Table from "../components/table";
import { useState } from "react";

const Home = ({ posts }) => {
    const { flash } = usePage().props;
    const [message, setMessage] = useState(flash.message);
    const [success, setSuccess] = useState(flash.success);
    setTimeout(() => {
        setMessage(null);
        setSuccess(null);
    }, 2000);

    return (
        <div>
            <Layout />

            <div>
                {message && (
                    <div className="flex items-center justify-end">
                        <p className="text-white bg-red-500 border rounded-lg p-2 mt-2">
                            {message}
                        </p>
                    </div>
                )}
                {success && (
                    <div className="flex items-center justify-end">
                        <p className="text-white bg-green-500 border rounded-lg p-2 mt-2">
                            {success}
                        </p>
                    </div>
                )}
                <table className="table-auto border">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {posts.data.map((post) => (
                        <Table key={post.id} post={post} />
                    ))}
                </table>
            </div>
            <div className="py-12 px-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                )}
            </div>
        </div>
    );
};

// Home.layout = page => <Layout children={page} title='Welcome' />;

export default Home;
