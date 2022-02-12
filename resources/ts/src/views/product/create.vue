<template>
    <div>
        <h3 class="text-center">Create Product</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="saveProduct">
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
                    <button type="submit" class="btn btn-primary">
                        Create
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from "@/core/services/ApiService";
import Form from "vform";
import router from "@/router";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

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
        async saveProduct() {
            console.log(this.form);
            const data = await ApiService.post("products", this.form);
              
          //   console.log(data);
            
            if (data.status === 201) {
              router.push("product");
              Swal.fire({
                      text: 'Product created Successfully',
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
