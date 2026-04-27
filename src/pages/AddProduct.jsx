import React from 'react'
import styles from './AddProduct.module.css'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'



export const AddProduct = () => {
    const productSchema = z.object({
        title: z.string()
            .min(1, "Title is required") // Replaced .nonempty()
            .min(5, "Title must be at least 5 characters"),
        description: z.string()
            .min(1, "Description is required") // Replaced .nonempty()
            .min(10, "Description must be at least 10 characters"),

        price: z.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number"
        }).positive("Price must be greater than zero"), // .nonempty() does not exist for numbers

        category: z.string()
            .min(1, "Category is required"),

        image: z.string().url("Must be a valid image URL")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(productSchema)
    })

    const onSubmit = (data) => {
        console.log(data);

    }






    console.log(errors);


    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <div className={styles.header}>
                    <h1>Add New Product</h1>
                    <p>Fill in the details below to list your product</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    {/* Image Preview Section */}
                    {/* <div className={styles.imageSection}>
                        <div className={styles.imagePreview}>
                            <div className={styles.imagePlaceholder}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                                <p>Image Preview</p>
                            </div>
                        </div>
                    </div> */}

                    {/* Form Fields */}
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Product Title *</label>
                        <input

                            // {...register("title", { required: { value: true, message: "title is require" }, minLength: { value: 20, message: "Title must be alleast 20 character" }, })}
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter product title"
                            maxLength="100"
                        />
                        {errors?.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description *</label>
                        <textarea
                            // {...register("description", { required: { value: true, message: "description is required" }, maxLength: { value: 300, message: "Description must not be longer than 300 character" } }, { minLength: { value: 10, message: "Description must be atleast 10 character" } })}
                            id="description"
                            name="description"
                            placeholder="Describe your product in detail"

                            rows="4"
                            maxLength="500"
                        />
                        {errors?.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="price">Price ($) *</label>
                            <input
                                // {...register("price", { required: { value: true, message: "Price is Required" } })}
                                type="number"
                                id="price"
                                name="price"
                                placeholder="0.00"
                                step="0.01"
                                min="0"

                            />
                            {errors?.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="category">Category *</label>
                            <select id="category" name="category" {...register("category")}>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="home">Home</option>
                                <option value="books">Books</option>
                                <option value="sports">Sports</option>
                                <option value="beauty">Beauty</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="imageUrl">Image URL *</label>
                        <input
                            {...register("imageUrl")}
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="https://example.com/image.jpg"

                        />
                    </div>

                    {/* Action Buttons */}
                    <div className={styles.buttonGroup}>
                        <button type="submit" className={styles.submitBtn}>
                            Add Product
                        </button>
                        <button type="reset" className={styles.resetBtn}>
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
