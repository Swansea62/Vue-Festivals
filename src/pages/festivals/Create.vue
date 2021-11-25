<template>
    <b-col>
        <h2>Create Festival</h2>
        <b-form-group
            label="Title"
            label-for="title-input"
        >
        <b-form-input
          id="title-input"
          v-model="form.title"
          type="text"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Description"
            label-for="desc-input"
        >
        <b-form-textarea
            id="desc-input"
            v-model="form.description"
            placeholder="Enter description..."
            rows="3"
            max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
            label="City"
            label-for="city-input"
        >
        <b-form-input
          id="city-input"
          v-model="form.city"
          type="text"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Start Date"
            label-for="start-input"
        >
        <b-form-datepicker 
          id="start-input"
          v-model="form.start_date"
          required
        ></b-form-datepicker >
        </b-form-group>
        <b-form-group
            label="End Date"
            label-for="end-input"
        >
        <b-form-datepicker 
          id="end-input"
          v-model="form.end_date"
          required
        ></b-form-datepicker >
        </b-form-group>
        <b-button @click="submitform()">Submit</b-button>
        <b-button @click="cancel()">Cancel</b-button>
    </b-col>
</template>
<script>
export default {
    name: "FestivalCreate",
    data() {
        return {
            form: {
                title: "",
                description: "",
                city: "",
                start_date: "",
                end_date: ""
            }
        }
    },
    methods: {
        submitForm() {

        },
        cancel() {
            this.$router.go(-1)
        }
    }
}
</script>
