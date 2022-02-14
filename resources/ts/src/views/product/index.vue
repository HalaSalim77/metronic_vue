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
                            <!-- <router-link
                                class="menu-link"
                                active-class="active"
                                :to="product"
                            >
                            </router-link> -->
                            <button
                                class="btn btn-danger btn-sm"
                                @click="deleteProduct(product.id)"
                            >
                                Delete
                            </button>
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
import Swal from "sweetalert2/dist/sweetalert2.min.js";
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
        //show products function
        async AllProducts(currentPage) {
            const data = await ApiService.get("products");
            console.log(data.data);
            this.products = data.data;
        },
        //delete product 
        async deleteProduct(id) {
            // Use sweetalert2
            console.log(id);
            const data = await ApiService.delete("products", id);
            console.log(data);
            if (data.status == 200) {
                Swal.fire({
                    text: "Product deleted Successfully",
                    icon: "success",
                });
                window.location.reload();
                this.errors = [];
            }
        },
    },
};
</script>
