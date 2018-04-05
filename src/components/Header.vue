<template>
	 <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <router-link to="" class="navbar-brand">Admin panel</router-link>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li v-if="isLoggedInLocal" class="li-pointer"><a >{{ userEmail }}</a></li>

		     </ul>

        </div>
        <!-- /.container -->
    </nav>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        computed: {
            isLoggedInLocal() {
                return this.$store.getters.isLoggedIn;
            },
            userEmail() {
                if (this.isLoggedInLocal) {
                    return this.$store.getters.currentUser.email;
                } else {
                    return '';
                }
            }
        }
    }
</script>


<style scoped lange="sass">
    .navbar-btn a {
        color: white;
    }

    .li-pointer {
        cursor: pointer;
    }

    .li-pointer:hover {
        cursor: pointer;
    }
</style>
