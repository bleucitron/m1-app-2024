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

<h2>Inscription</h2>

<form action="?/register" method="POST">
	<label class:error={form?.field === 'name'}>
		Name
		<input type="text" name="name" value={form?.name} />
	</label>
	<label class:error={form?.field === 'password'}>
		Password
		<input type="password" name="password" />
	</label>
	<label class:error={form?.field === 'confirmPassword'}>
		Confirm password
		<input type="password" name="confirmPassword" />
	</label>
	<button>S'inscrire</button>
</form>

<h2>Connexion</h2>

<form action="?/login" method="POST">
	<label class:error={form?.field === 'name'}>
		Name
		<input type="text" name="name" value={form?.name} />
	</label>
	<label class:error={form?.field === 'password'}>
		Password
		<input type="password" name="password" />
	</label>
	<button>Se connecter</button>
</form>

<style>
	.error {
		color: red;
	}
</style>
