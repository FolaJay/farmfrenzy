<template>
  <div class='side-bar bg-white h-screen'>
    <div class="flex flex-col flex-no-wrap">
      <span class="flex lg:hidden justify-end text-3xl">
        <i class='uil uil-times sideBarTrigger'></i>
      </span>
      <span>
        <p class="px-5 py-2 lg:py-10 text-3xl font-thin">
          Farm Frenzy</p>
      </span>
      <ul class="flex flex-col flex-no-wrap vertical-menu">
        <li><router-link to="/home"><i class='uil uil-analytics'></i>Home</router-link></li>
        <li>
          <router-link class="has-submenu"
            v-bind:class="{ droped: dropDownStatus }"
            to="/working">
            <p @click.prevent="toggleDropDown($event)" class="has-icon trigger">
              <i class='uil uil-store'></i> Sales
              <i class='uil uil-angle-down'></i></p>
            <ul class="flex-col flex-no-wrap submenu">
              <li><router-link to="/sales/view">
                <i class='uil uil-receipt-alt'></i>View</router-link></li>
              <li><router-link to="/sales/create">
                <i class='uil uil-file-landscape-alt'></i>Create</router-link></li>
            </ul>
          </router-link>
        </li>
        <li>
          <router-link class="has-submenu"
            v-bind:class="{ droped: dropDownStatus }"
            to="/no">
            <p @click.prevent="toggleDropDown($event)" class="has-icon trigger">
              <i class='uil uil-store'></i> Purchases
              <i class='uil uil-angle-down'></i>
            </p>
            <ul class="flex flex-col flex-no-wrap submenu">
              <li><router-link to="/sales/view">
                <i class='uil uil-receipt-alt'></i>View</router-link></li>
              <li><router-link to="/sales/create">
                <i class='uil uil-file-landscape-alt'></i>Create</router-link></li>
            </ul>
          </router-link>
        </li>
        <li><router-link to="/way"><i class='uil uil-parcel'></i>Master</router-link></li>
        <li><router-link to="/this"><i class='uil uil-sun'></i>Help</router-link></li>
        <li><router-link to="/is"><i class='uil uil-cog'></i>Settings</router-link></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.side-bar {
  position: fixed;
  width: 240px;
  top: 47px;
  border-right: 1px solid #d3d3d3;
  z-index: 9999;
  @media only screen and (max-width: 720px) {
    margin-left: -240px;
    top: 0;
  }
}
.side-bar.isOpen {
  @media only screen and (max-width: 720px) {
    margin-left: 0px;
  }
}
ul.vertical-menu {
  li {
    a {
      display: flex;
      padding: 9px 20px;
      font-size: 19px;
    }
    a.router-link-active {
      color: #0213ff;
      // background: rgba(2, 19, 255, 0.09);
    }
    a.has-submenu {
      position: relative;
      flex-flow: column nowrap;
      .submenu {
        transition: max-height .2s ease-in;
        max-height: 0px;
        overflow: hidden;
      }
      .submenu.isOpen {
        display: flex;
        margin: 0; padding: 0;
        height: auto;
        max-height: 200px;
        border-left: 2px solid #ccc;
      }
    }
    a:hover {
      background: rgba(2, 19, 255, 0.1);
;
    }
  }
  .has-icon {
    display: flex;
    flex-flow: row nowrap;
  }
  i, .has-icon > i {
    width: 37px;
  }
}
</style>
<script>
export default {
  mounted() {
    this.toggleSubmenu();
  },
  methods: {
    toggleSubmenu() {
      const alink = document.querySelectorAll('a.has-submenu p.trigger');
      for (let i = 0; i < alink.length; i += 1) {
        alink[i].addEventListener('click', (e) => {
          e.preventDefault();
          const submenu = document.querySelectorAll('.submenu');
          for (let j = 0; j < submenu.length; j += 1) {
            if (submenu[j] !== alink[i].nextSibling && submenu[j].classList.contains('isOpen')) {
              submenu[j].classList.remove('isOpen');
            }
          }
          if (alink[i].nextSibling.tagName === 'UL') {
            const currentSubmenu = alink[i].nextSibling;
            currentSubmenu.classList.toggle('isOpen');
          }
        });
      }
    },
  },
};
</script>
