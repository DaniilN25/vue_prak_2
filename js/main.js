
Vue.component('product-review', {
  template: `

<form class="review-form" @submit.prevent="onSubmit">

<p>
  <textarea id="review" v-model="review" placeholder="Name tabs"></textarea>
</p>
<p>
  <input id="name-1" v-model="name" placeholder="Info tab - 1">
</p>

<p>
  <input id="name-2" v-model="name" placeholder="Info tab - 2">
</p>
<p>
  <input id="name-3" v-model="name" placeholder="Info tab - 3">
</p>
<p>
  <input id="name-4" v-model="name" placeholder="Info tab - 4">
</p>
<p>
  <input id="name-5" v-model="name" placeholder="Info tab - 5">
</p>


<p>
  <input type="submit" value="Submit"> 
</p>

</form>
<div class="note-tabs">
<h2>One tab</h2>
v-if="!reviews.length">There are no reviews yet.
<ul>
  <li v-for="review in reviews">
   <p>{{ review.name }}</p>
  <p>{{ review.name }}</p>
  <p>{{ review.name }}</p>
  <p>{{ review.name }}</p>
  <p>{{ review.name }}</p>
  <p>{{ review.name }}</p>
  </li>
</ul>
</div> <product-review @review-submitted="addReview"></product-review>
`,
  data() {
      return {
          name: null,
          review: null,
          name: null,
          errors: []
      }
  },
  methods:{
      onSubmit() {
          if(this.name && this.review) {
              let productReview = {
                  name: this.name,
                  review: this.review,
              }
              this.$emit('review-submitted', productReview)
              this.name = null
              this.review = null
          }
      }
  }
})

Vue.component('product', {
  props: {
      premium: {
          type: Boolean,
          required: true
      }
  },
  template: `
  <div class="product">        
      <div class="note-tabs">
           <h2>One tab</h2>
           <p v-if="!reviews.length">There are no reviews yet.</p>
           <ul>
             <li v-for="review in reviews">
             <p>{{ review.review }}</p>
             <p>{{ review.name }}</p>
             <p>{{ review.name }}</p>
             <p>{{ review.name }}</p>
             <p>{{ review.name }}</p>
             <p>{{ review.name }}</p>
             </li>
           </ul>
          </div> <product-review @review-submitted="addReview"></product-review>
      </div>
`,
  data() {
      return {
          reviews: []
      }
  },
  methods: {
      addReview(productReview) {
          this.reviews.push(productReview)
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product;
      },
  }
})

let app = new Vue({
  el: '#app',
  data: {
      premium: true,
      cart: []
  },
  methods: {
      updateCart(id) {
          this.cart.push(id);
      }
  }
})

