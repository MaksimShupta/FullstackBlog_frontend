import Button from "../components/ui/Button";

const PostDetailsPage = () => {
    return (
        <div className="w-auto mx-auto p-6">
            <div className="card rounded-lg">
                <div className="card-body flex flex-col md:flex-row gap-6">
                    <figure className="md:w-1/3 h-[540px] bg-gray-300 flex items-center justify-center rounded-md">
                        <span className="text-gray-500 text-lg">
                            Image Placeholder
                        </span>
                    </figure>
                    <div className="md:w-2/3 flex flex-col">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                Frankenstein
                            </h2>
                            <p className="text-gray-500 text-sm mb-4">
                                28.02.2025 | Article ID 23
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Hic, doloribus dolores.
                                Quibusdam ab eum, labore maxime quia, neque
                                corporis magnam sunt dignissimos dolor quo ex
                                eaque veritatis? At, ex sint? Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit. Hic,
                                doloribus dolores. Quibusdam ab eum, labore
                                maxime quia, neque corporis magnam sunt
                                dignissimos dolor quo ex eaque veritatis? At, ex
                                sint? Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <div className="flex flex-row gap-8 mb-6">
                                <div className="space-y-1">
                                    <p>
                                        <strong>Book Author:</strong>
                                    </p>
                                    <p>Mary Shelley</p>
                                </div>
                                <div className="space-y-1">
                                    <p>
                                        <strong>Genre:</strong>
                                    </p>
                                    <p>Science Fiction; Gothic</p>
                                </div>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    text="Update Article"
                                    className="btn-primary px-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
