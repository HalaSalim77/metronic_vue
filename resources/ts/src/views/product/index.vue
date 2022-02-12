<template>
    <h1>Products</h1>
    <!-- <div v-for="product in products" :key="product.id">
        {{ product.name }}
    </div> -->

    <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-5">
            <!--begin::Table head-->
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <!--end::Table head-->
            <!--begin::Table body-->
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.description }}</td>
                  <td>
                    <div class="btn-group" role="group">
                     <!-- <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-success">Edit</router-link> -->
                        <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Delete</button>
                    </div>
                </td>
                </tr>
            </tbody>
            <!--end::Table body-->
        </table>
        <!--end::Table-->
    </div>
</template>
<script>
import ApiService from "@/core/services/ApiService";
export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.AllProducts();
    },
    methods: {
        async AllProducts(currentPage) {
            const data = await ApiService.get("products");
            console.log(data.data);
            this.products = data.data;
        },
        async deleteProduct(id) {
            // Use sweetalert2
            console.log(id);
            const data = await ApiService.delete(id, "products");

            // if (data) {
            //     await this.AllProducts();
            //     this.makeToast('success')
            // }
        },
        // makeToast(variant = null) {
        //     this.$bvToast.toast('Toast body content', {
        //         title: `Variant ${variant || 'default'}`,
        //         variant: variant,
        //         solid: true
        //     })
        // }
    },
};
</script>
