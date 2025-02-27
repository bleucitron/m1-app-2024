<script lang="ts">
	import { enhance } from '$app/forms';
	let { form, data } = $props();
</script>

<h1>Profil</h1>
{#if data.user}
	<p>Bienvenue {data.user.name}</p>
{:else}
	{#if form?.message}
		<p>{form.message}</p>
	{/if}
	{#if form?.success}
		<p>Génial, tu es bien connecté !</p>
	{/if}

	<h2>Inscription</h2>

	<form action="?/register" method="POST" use:enhance>
		<label class:error={form?.field === 'name_register'}>
			Name
			<input type="text" name="name_register" value={form?.name} />
		</label>
		<label class:error={form?.field === 'password_register'}>
			Password
			<input type="password" name="password_register" />
		</label>
		<label class:error={form?.field === 'confirmPassword_register'}>
			Confirm password
			<input type="password" name="confirmPassword_register" />
		</label>
		<button>S'inscrire</button>
	</form>

	<h2>Connexion</h2>

	<form action="?/login" method="POST" use:enhance>
		<label class:error={form?.field === 'name_login'}>
			Name
			<input type="text" name="name_login" />
		</label>
		<label class:error={form?.field === 'password_login'}>
			Password
			<input type="password" name="password_login" />
		</label>
		<button>Se connecter</button>
	</form>
{/if}

<style>
	.error {
		color: red;
	}
</style>
