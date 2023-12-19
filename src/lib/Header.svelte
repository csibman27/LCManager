<script>
	import Hero from './Hero.svelte';
	import WelcomeNavigator from './WelcomeNav.svelte';
</script>

<div class="columns is-vcentered">
	<div class="column is-two-thirds">
		<Hero title={'Lifecycle Manager'} subTitleHero={'Please Log in'} />
	</div>
	<div class="column">
		<WelcomeNavigator />
	</div>
</div>