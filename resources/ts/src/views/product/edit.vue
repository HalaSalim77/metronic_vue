<template>
    <div>
        <h3 class="text-center">Edit Product</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="editproduct">
                    <div class="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="form.name"
                        />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="form.price"
                        />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="form.description"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Edit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Form from "vform";
export default {
    data() {
        return {
            form: new Form({
                name: "",
                price: "",
                description: "",
            }),
            errors: [],
        };
    },
    methods: {
        async editproduct() {
            console.log(this.form);
            const data = await ApiService.put("products", this.form);

            //   console.log(data);

            if (data.status === 201) {
                router.push("product");
                Swal.fire({
                    text: "Product updated Successfully",
                    icon: "success",
                });
                this.errors = [];
            } else if (data.status === 422) {
                this.errors = data.data.data;
            }
        },
    },
};
</script>
