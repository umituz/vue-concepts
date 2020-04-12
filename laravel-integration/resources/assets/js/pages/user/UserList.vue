<template>
    <div>
        <UserModal :item="item" v-on:onSaved="refreshData" ref="userModal" />
        <div class="btn-group float-right">
            <button @click="fetchData" class="btn btn-primary float-right" style="margin-bottom:10px;">
                Yenile
            </button>
            <button @click="createData" class="btn btn-success float-right" style="margin-bottom:10px; margin-right:5px;">
                Yeni Ekle
            </button>
        </div>
        <h1>Kullanıcılar</h1>
        <div v-if="errorMessage" class="alert alert-danger col-4">{{ errorMessage }}</div>
        <table class="table table-bordered table-hover" v-if="list !== null && list.length > 0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>İsim</th>
                    <th>Email</th>
                    <th>İşlemler</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{id,name,email} in list">
                    <td>{{ id }}</td>
                    <td>{{ name }}</td>
                    <td>{{ email }}</td>
                    <td>
                        <button @click="editData(id)" class="btn btn-primary">Düzenle</button>
                        <button @click="deleteData(id)" class="btn btn-danger">Sil</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>Kayıtlı Kullanıcı Bulunamadı.</p>
        <Pagination :meta="meta" v-on:pageChange="fetchData" />
    </div>
</template>

<script>
    import Pagination from '../../components/Pagination';
    import UserModal from './UserModal';
    export default {
        components:{ Pagination,UserModal },
        data(){
            return{
                list:null,
                errorMessage:null,
                meta:{},
                item:{}
            }
        },
        created(){
            this.fetchData();
        },
        methods:{
            fetchData(page = 1){
                this.errorMessage = null;
                this.list = null;
                axios.get('/users',{ params: { page } })
                    .then(response => {
                        this.list = response.data.data;
                        this.meta = response.data.meta;
                    })
                    .catch(error => {
                        if(error.response != null)
                            this.errorMessage = error.response.data.message;
                        else
                            this.errorMessage = error.message;
                    });
            },
            createData(){
                this.item = {};
                this.$refs.userModal.errorMessage = '';
                $('#userModal').modal('show');
            },
            refreshData(){
                this.fetchData();
            },
            editData(id){
                axios.get('/users/'+id)
                    .then(response => {
                        this.$refs.userModal.errorMessage = '';
                        this.item = response.data;
                        $('#userModal').modal('show');
                    })
                    .catch(error => {
                        if(error.response != null)
                            this.errorMessage = error.response.data.message;
                        else
                            this.errorMessage = error.message;
                    });
            },
            deleteData(id){
                swal({
                    title:'Emin Misiniz?',
                    text:'Bu kaydı kalıcı olarak silmek istediğinize emin misiniz? Kalıcı olarak silinen veriler geri döndürelemezler.',
                    type:'warning',
                    showCancelButton:'true',
                    cancelButtonText:'İptal',
                    confirmButtonText:'Sil'
                }).then(result =>  {
                    if(result.value){
                        axios.delete('/users/'+id)
                            .then(response => {
                                this.fetchData();
                                toastr.success('Kayıt silindi','Kullanıcı');
                            })
                            .catch(error => {
                                if(error.response != null)
                                    this.errorMessage = error.response.data.message;
                                else
                                    this.errorMessage = error.message;
                            });
                    }
                })
            }
        }
    }
</script>

