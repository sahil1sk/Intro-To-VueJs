<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }"> 
            <slot> 
                defaul content
            </slot> 
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
// <template>
//     <!--click.self means when only click on that div the event is fired-->
//     <div class="backdrop" @click.self="closeModal">
//         <div class="modal" :class="{ sale: theme === 'sale' }"> <!-- if theme is equal to sale then set sale class otherwise not-->
//             <!-- <h1>{{ header }}</h1>
//             <p>{{ text }}</p> -->
//             <slot> <!-- if no content passed then it will show default content -->
//                 defaul content
//             </slot> <!--helps to set the data which we pass in the Modal while using-->
//             <div class="actions">
//                 <!-- setting the name slot if any there of links named -->
//                 <slot name="links"></slot>
//             </div>
//         </div>
//     </div>
// </template>

export default {
    props: [
        'header', 
        'text', 
        'theme',
    ],
    methods: {
        closeModal() {
            // here we emitting the custom event
            this.$emit('close'); 
        }
    }
}
</script>


<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
  /* sale styles */
  .modal.sale {
    background: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
  .modal.sale .actions {
    color: white;
  }
  .modal.sale .actions a {
    color: white;
  }
</style>