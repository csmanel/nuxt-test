<script lang="ts">
const cart = ref<string[]>([]);
const showModal = ref(false);

const addToCart = (item: string) => {
  if (!cart.value.includes(item)) {
    cart.value.push(item);
  }
};

const placeOrder = () => {
  showModal.value = true;
};
</script>
