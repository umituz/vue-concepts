const app = new Vue({
    el:'#app',
    name:'Ümit UZ VueJS',
    data:{
        aktifKullanici:{},
        kullanicilar:[
            {
                id:39,
                isim:'Umut',
                rol:'Admin',
            },
            {
                id:92,
                isim:'Ümit',
                rol:'SuperVisor',
            },
            {
                id:47,
                isim:'UZ',
                rol:'User',
            },
        ]
    },
    methods:{
        kullaniciYeniEkle(){
            this.aktifKullanici={
                rol:'Seçiniz'
            };
            $('#kullaniciModal').modal('show');

        },
        kullaniciKaydet(){
            if(this.aktifKullanici.isim != undefined && this.aktifKullanici.rol != 'Seçiniz')
            {
                if(this.aktifKullanici.id > 0)
                {
                        let kullanici = this.kullanicilar.find(x=>x.id == this.aktifKullanici.id);
                    kullanici = this.aktifKullanici;
                }
                else
                {
                    this.kullanicilar.push({
                        id:this.kullanicilar.length+1,
                        isim:this.aktifKullanici.isim,
                        rol:this.aktifKullanici.rol
                    });
                }
                this.aktifKullanici = {};
                $('#kullaniciModal').modal('hide');
            }
            else
            {
                $('#kullaniciModal').modal('hide');
            }
        },
        kullaniciDuzenle(index){
            this.aktifKullanici = this.kullanicilar[index];
            // this.aktifKullanici = this.kullanicilar.find(x=>x.id == id);
            $('#kullaniciModal').modal('show');
        },
        kullaniciSil(id){
           const kullanici = this.kullanicilar.find(x=>x.id == id);
           if(kullanici != null)
           {
               this.kullanicilar = this.kullanicilar.filter(x=>x.id != kullanici.id);
           }
        },

    }
});