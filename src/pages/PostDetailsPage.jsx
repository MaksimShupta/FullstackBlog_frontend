import Button from "../components/ui/Button";

const PostDetailsPage = () => {
    return (
        <div className="w-auto mx-auto p-6">
            <div className="card rounded-lg">
                <figure className="h-80 bg-gray-300 flex items-center justify-center rounded-b-xl">
                    <span className="text-gray-500 text-lg">
                        Image Placeholder
                    </span>
                </figure>

                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title text-xl font-semibold">
                                Lorem Ipsum
                            </h2>
                            <p className="text-gray-500 text-sm">Author Name</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-sm">Genre</p>
                            <p className="text-gray-500 text-sm">28.02.2025</p>
                        </div>
                    </div>

                    <p className="text-gray-700 bg-gray-100 p-4 rounded-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Hic, doloribus dolores. Quibusdam ab eum, labore
                        maxime quia, neque corporis magnam sunt dignissimos
                        dolor quo ex eaque veritatis? At, ex sint? Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Hic,
                        doloribus dolores. Quibusdam ab eum, labore maxime quia,
                        neque corporis magnam sunt dignissimos dolor quo ex
                        eaque veritatis? At, ex sint?
                    </p>
                    <div className="card-actions justify-center mt-4 space-x-2">
                        <Button
                            type="submit"
                            text="Update"
                            className="btn-primary px-6"
                        />
                        <Button
                            type="submit"
                            text="Delete"
                            className="btn-error px-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
