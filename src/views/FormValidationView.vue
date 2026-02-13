<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { isEmail, isRequired, minLength } from "@/utils/validationUtils";

interface ProfileForm {
  name: string;
  email: string;
  bio: string;
}

const form = reactive<ProfileForm>({
  name: "",
  email: "",
  bio: "",
});

const submittedData = ref<ProfileForm | null>(null);

const errors = computed(() => {
  const nameRequired = isRequired(form.name, "姓名");
  const nameMin = minLength(form.name, 2, "姓名");
  const emailRequired = isRequired(form.email, "Email");
  const emailFormat = isEmail(form.email, "Email");
  const bioMin = minLength(form.bio, 10, "自我介紹");

  return {
    name:
      [nameRequired, nameMin].find((result) => !result.isValid)?.message ?? "",
    email:
      [emailRequired, emailFormat].find((result) => !result.isValid)?.message ??
      "",
    bio: bioMin.message,
  };
});

const isFormValid = computed(() => {
  return Object.values(errors.value).every((message) => message === "");
});

const handleSubmit = () => {
  if (!isFormValid.value) {
    submittedData.value = null;
    return;
  }
  // 注意：前端驗證只是基本檢查，後端仍需再次驗證
  submittedData.value = { ...form };
};
</script>

<template>
  <section class="bg-white p-4 rounded shadow">
    <h2 class="text-xl font-medium mb-4">表單驗證示範</h2>
    <form class="space-y-4" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-sm font-medium" for="name">姓名</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="w-full border px-3 py-2 rounded"
          placeholder="請輸入姓名"
        />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>
      <div>
        <label class="block text-sm font-medium" for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full border px-3 py-2 rounded"
          placeholder="example@mail.com"
        />
        <p v-if="errors.email" class="text-red-500 text-sm">
          {{ errors.email }}
        </p>
      </div>
      <div>
        <label class="block text-sm font-medium" for="bio">自我介紹</label>
        <textarea
          id="bio"
          v-model="form.bio"
          rows="4"
          class="w-full border px-3 py-2 rounded"
        ></textarea>
        <p v-if="errors.bio" class="text-red-500 text-sm">{{ errors.bio }}</p>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
        送出
      </button>
    </form>

    <div v-if="submittedData" class="mt-6">
      <h3 class="text-lg font-medium mb-2">送出結果</h3>
      <pre class="bg-gray-100 p-3 rounded text-sm">{{ submittedData }}</pre>
    </div>
  </section>
</template>
