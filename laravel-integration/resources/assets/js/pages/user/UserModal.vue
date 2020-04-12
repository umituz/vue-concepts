<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="userModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" v-text="item.id > 0 ? 'Kullanıcı Düzenle' : 'Kullanıcı Ekle'"></div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div v-if="errorMessage" class="alert alert-danger" v-html="errorMessage"></div>
                    <form @submit.prevent="true">
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Kullanıcı Adı</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="item.name" placeholder="Kullanıcı Adı Giriniz.">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Şifre</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" v-model="item.password" placeholder="Şifre Giriniz.">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">E-mail</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="item.email" placeholder="E-mail Giriniz.">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button v-text="item.id > 0 ? 'Güncelle' : 'Kaydet'" @click="saveItem" class="btn btn-primary">Kaydet</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['item'],
        data(){
            return {
                errorMessage:''
            }
        },
        methods:{
            saveItem(){
               if(this.item.id > 0){
                   axios.put('/users/'+this.item.id,this.item)
                       .then(response => {
                           if(response.data.success){
                               this.$emit('onSaved',this.item);
                               $('#userModal').modal('hide');
                               toastr.success('Kayıt Güncellendi','Kullanıcı');
                           }
                       })
                       .catch(error => {
                           this.errorMessage = error.response.data.message;
                           if(error.response.data.errors){
                               this.errorMessage += '<ul>';
                               Object.keys(error.response.data.errors).forEach((key) => {
                                   this.errorMessage += '<li>'+error.response.data.errors[key][0]+'</li>';
                               });
                               this.errorMessage += '</ul>';

                           }
                       });
               }else{
                   axios.post('/users',this.item)
                       .then(response => {
                           if(response.data.success){
                               this.$emit('onSaved',this.item);
                               $('#userModal').modal('hide');
                               toastr.success('Kayıt Eklendi','Kullanıcı');
                           }
                       })
                       .catch(error => {
                           this.errorMessage = error.response.data.message;
                           if(error.response.data.errors){
                               this.errorMessage += '<ul>';
                               Object.keys(error.response.data.errors).forEach((key) => {
                                   this.errorMessage += '<li>'+error.response.data.errors[key][0]+'</li>';
                               });
                               this.errorMessage += '</ul>';

                           }
                       });
               }
            }
        }
    }
</script>