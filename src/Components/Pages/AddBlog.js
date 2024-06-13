import React, { useState, createContext, useContext } from 'react';

// Context API
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState({
        title_en: '',
        title_tr: '',
        title_ar: '',
        description_en: '',
        description_tr: '',
        description_ar: '',
        images: []
    });

    const updateProductData = (path, value) => {
        setProductData((prev) => {
            const keys = path.split('.');
            let temp = { ...prev };

            keys.reduce((acc, key, index) => {
                if (index === keys.length - 1) {
                    acc[key] = value;
                } else {
                    if (!acc[key]) {
                        acc[key] = {};
                    }
                    acc[key] = { ...acc[key] };
                }
                return acc[key];
            }, temp);

            return temp;
        });
    };

    return (
        <ProductContext.Provider value={{ productData, updateProductData }}>
            {children}
        </ProductContext.Provider>
    );
};

// Kullanım Kolaylığı için Özel Bir Hook
const useProduct = () => useContext(ProductContext);

const ProductForm = () => {
    const { productData, updateProductData } = useProduct();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        updateProductData(name, newValue);
    };

    return (
        <main className="page-content">
            {/* Breadcrumb */}
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">eCommerce</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item">
                                <a href="javascript:;"><i className="bx bx-home-alt"></i></a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Blog Yazısı Ekle
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* End Breadcrumb */}

            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            {/* English Title and Description */}
                            <div className="mb-4">
                                <h5 className="mb-3">Blog Başlığı (İngilizce)</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="write title here...."
                                    name="title_en"
                                    value={productData.title_en}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Blog Açıklaması (İngilizce)</h5>
                                <textarea
                                    className="form-control"
                                    cols="4"
                                    rows="6"
                                    placeholder="write a description here.."
                                    name="description_en"
                                    value={productData.description_en}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {/* Turkish Title and Description */}
                            <div className="mb-4">
                                <h5 className="mb-3">Blog Başlığı (Türkçe)</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="başlığı buraya yazın...."
                                    name="title_tr"
                                    value={productData.title_tr}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Blog Açıklaması (Türkçe)</h5>
                                <textarea
                                    className="form-control"
                                    cols="4"
                                    rows="6"
                                    placeholder="açıklamayı buraya yazın.."
                                    name="description_tr"
                                    value={productData.description_tr}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {/* Spanish Title and Description */}
                            <div className="mb-4">
                                <h5 className="mb-3">Blog Başlığı(Arapça)</h5>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="escriba el título aquí...."
                                    name="title_es"
                                    value={productData.title_ar}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Blog Açıklaması (Arapça)</h5>
                                <textarea
                                    className="form-control"
                                    cols="4"
                                    rows="6"
                                    placeholder="escriba una descripción aquí.."
                                    name="description_es"
                                    value={productData.description_ar}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {/* Image Upload */}
                            <div className="mb-4">
                                <h5 className="mb-3">Display images</h5>
                                <input
                                    id="fancy-file-upload"
                                    type="file"
                                    name="images"
                                    accept=".jpg, .png, image/jpeg, image/png"
                                    multiple
                                    onChange={(e) => updateProductData('images', [...e.target.files])}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Row */}
        </main>
    );
};

const App = () => (
    <ProductProvider>
        <ProductForm />
    </ProductProvider>
);

export default App;
