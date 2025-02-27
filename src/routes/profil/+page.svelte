<script lang="ts">
	import { fromStore } from 'svelte/store';

	let { form } = $props();
</script>

<h1>Profil</h1>
{#if form?.message}
	<p>{form.message}</p>
{/if}
{#if form?.success}
	<p>Génial, tu es bien connecté !</p>
{/if}

<form method="POST">
	<label class:error={form?.field === 'userName'}>
		Username
		<input type="text" name="userName" value={form?.userName} />
	</label>
	<label class:error={form?.field === 'password'}>
		Password
		<input type="password" name="password" />
	</label>
	<label class:error={form?.field === 'confirmPassword'}>
		Confirm password
		<input type="password" name="confirmPassword" />
	</label>
	<button>Envoyer</button>
</form>

<style>
	.error {
		color: red;
	}
</style>
