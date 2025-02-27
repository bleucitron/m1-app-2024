<script lang="ts">
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
	<label>
		Username
		<input type="text" name="userName" />
	</label>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<label>
		Confirm password
		<input type="password" name="confirmPassword" />
	</label>
	<button>Envoyer</button>
</form>
