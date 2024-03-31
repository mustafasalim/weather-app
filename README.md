# Weather App

##### Bu proje, kullanıcıların hava durumu bilgilerini anlık olarak görüntülemelerini sağlayan bir web uygulamasıdır. Geliştirme aşamasında React kütüphanesi kullanılmıştır ve kullanıcılara hava durumu verilerine erişim sağlamak için çeşitli hava durumu API'larıyla entegre edilmiştir. Uygulama, kullanıcıların dünya genelinde herhangi bir konumun hava durumu bilgisine kolayca erişmelerini sağlar, böylece günlük yaşamlarında seyahat planlarını yaparken veya dışarıda zaman geçirirken hava koşullarını takip etmelerine yardımcı olur.

## Uygulama Linki

https://weather-app-react-project-ecru.vercel.app/

## Başlatma

Projeyi klonlayın veya ZIP dosyası olarak indirin.
Terminalde proje klasörüne gidin.

```bash
 pnpm install       //komutunu kullanarak gerekli bağımlılıkları yükleyin.
 pnpm dev           //komutunu kullanarak uygulamayı başlatın
```

Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görüntüleyin.

## Özellikler

### Responsive Tasarım

Bu hava durumu uygulaması, kullanıcıların farklı cihazlarda ve ekran boyutlarında rahatlıkla kullanabilmesini sağlamak için responsive bir tasarıma sahiptir. Responsive tasarım, uygulamanın masaüstü bilgisayarlar, dizüstü bilgisayarlar, tabletler ve akıllı telefonlar gibi farklı cihazlarda tutarlı bir şekilde görüntülenmesini sağlar.

### Grafik

Bu hava durumu uygulaması, kullanıcıların günlük yaşamlarında ihtiyaç duydukları sıcaklık, nem ve rüzgar hızı gibi önemli bilgileri daha basit ve okunabilir bir şekilde sunmak için çeşitli grafikler kullanır. Bu grafikler, kullanıcıların hava durumu verilerini daha anlaşılır bir şekilde görselleştirmelerine ve hızlıca bilgi alabilmelerine olanak tanır. Ayrıca, grafiklerin estetik tasarımı, projenin daha zengin ve şık görünmesini sağlar.

#### Grafik özelikleri

- Sıcaklık grafiği: Belirli bir zamanda sıcaklıktaki değişimi gösterir.
- Nem grafiği: Belirli bir zamandaki nem değişimini gösterir.
- Rüzgar hızı grafiği: Belirli bir zamanda rüzgar hızındaki değişimi gösterir.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/chart.png)

### Auto-complete

Auto-complete bileşenini oluştururken debounce tekniğini tercih ettim. Bu teknik, kullanıcının yazdığı girdiyi belirli bir saniye içinde alıp OpenWeather API'si üzerinden şehir aramak için isteği göndermemin nedeniydi. API'dan dönen sonuçları, bileşen içinde listelemekteyim. Kullanıcı istediği şehri seçtiğinde, o şehrin güncel hava durumu bilgilerini görüntülemektedir.

Bu yöntemi kullanma amacım, kullanıcının arama sürecini daha akıcı ve kesintisiz hale getirmekti. Debounce tekniği sayesinde, kullanıcı hızla yazarken arka planda gereksiz isteklerin gönderilmesini engelleyerek, performansı artırmayı hedefledim. Böylelikle, kullanıcılar arama yaparken daha sorunsuz bir deneyim yaşayabilir ve istedikleri şehrin hava durumu bilgilerine hızlıca erişebilirler.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/search.png)

### Konum

Tabii, işte daha açıklayıcı bir şekilde yazılmış hali:

Projedeki amaçlardan biri, kullanıcının bulunduğu coğrafi konumun güncel hava durumu bilgisinin kolayca görüntülenmesini sağlamaktı. Bu amaç doğrultusunda, iki farklı senaryo öngördüm:

#### Konumun Otomatik Olarak Alınması:

Kullanıcının konum bilgisini otomatik olarak alarak, bulunduğu bölgedeki güncel hava durumu bilgisini göstermek.
Eğer kullanıcı konum izni vermişse, "auto-complete" bileşeni içinde veya anasayfadaki "current location" butonuna tıkladığında, kullanıcının bulunduğu konumun hava durumu bilgisini anında görüntülemek.

#### Konum İzin İsteği:

Kullanıcının konum izni vermemesi durumunda, kullanıcıya konum izni isteğinde bulunulur.
Eğer kullanıcı konum iznini reddederse ve daha sonra "current location" butonuna tıklarsa, kullanıcıya konum izninin açılması gerektiğini bildiren mesajlar gösterilir.

Bu yaklaşım, kullanıcı deneyimini artırmak ve kullanıcının hava durumu bilgilerine hızlı ve kolay bir şekilde erişmesini sağlamak için tasarlandı. Kullanıcıya hem otomatik hem de manuel olarak konum izni alma seçeneği sunularak, kullanıcının tercihine göre hareket etmesi sağlanmış oldu. Bu sayede, kullanıcının güncel hava durumu bilgisine ulaşması için mümkün olan en kolay ve sorunsuz yöntemler sunulmuş oldu.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/search.png)

## Teknik Detaylar

### Hava Durumu Simgeleri ve Arka Plan Görselleri

#### Gündüz Görselleri:

Gündüz vaktinde, güneş ışığına uygun olarak gündüz ikonları ve arka plan resimleri kullanılır.
API'den gelen verilerde güneşin doğuş ve batış saatleri bilgisi bulunur. Bu bilgilere göre, gün batımı ve gün doğumu saatleri belirlenir.
Güneş doğuşundan batışına kadar geçen zaman diliminde gündüz ikonları ve arka plan resimleri gösterilir.
Gündüz ikonları genellikle güneşi, açık gökyüzünü veya bulutlu manzaraları temsil eder. Arka plan resimleri de benzer şekilde gündüz manzaralarını yansıtır.

#### Gece Görselleri:

Gece vaktinde, karanlık ortama uygun olarak gece ikonları ve arka plan resimleri kullanılır.
Güneş batışından doğuşuna kadar geçen zaman diliminde gece ikonları ve arka plan resimleri gösterilir.
Gece ikonları genellikle ayı, yıldızları veya bulutlu/gece manzaralarını temsil eder. Arka plan resimleri de karanlık atmosferi yansıtır.

Bu yaklaşım, kullanıcıya daha gerçekçi ve sezgisel bir hava durumu deneyimi sunar. Zamanın gündüz veya gece olmasına bağlı olarak, görsellerin dinamik olarak değiştirilmesi, kullanıcının hava durumunu daha iyi anlamasına ve görsel olarak daha zengin bir deneyim yaşamasına yardımcı olur. Bu sayede, kullanıcı uygulamayı kullanırken güncel hava durumunu daha kolay algılar ve hava durumu bilgilerini daha çekici bir şekilde görüntüler.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/current.png)

### Hava Durumu Bilgilerndirme Mesajları

Proje, güncel hava durumu bilgilerine göre kullanıcıya kısa bilgilendirme mesajları sunar. Bu mesajlar, kullanıcının hava durumu hakkında hızlı ve öz bilgi almasını sağlar ve hava durumunu daha iyi anlamasına yardımcı olur.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/message.png)

### Hata Durumları

Hata mesajları, kullanıcıların karşılaştığı sorunları net bir şekilde anlamalarını ve gerektiğinde doğru adımları atmalarını sağlar. Basit ve açık bir dil kullanılarak yazılmış olan bu mesajlar, kullanıcıların sorunları hızlıca çözmelerine yardımcı olur.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/error.png)

### ErrorBoundry

Error Boundaries, bir React uygulamasındaki olası hata durumlarını ele almak için kullanılan bir React bileşenidir. Bu hata sınırları, uygulamanın belirli bir bileşen ağacında bir hata oluştuğunda hatayı yakalar ve uygulamanın geri kalanını etkilemeden hatayı ele almanıza olanak tanır.

![Uygulama Ekran Görüntüsü](/public/images/readme-images/Screenshot.png)

## API

Bu API, Axios ve React Query kütüphaneleri kullanılarak oluşturulmuş bir hava durumu bilgisi dağıtım sistemidir. Axios, HTTP istekleri yapmak ve almak için kullanılırken, React Query bu istekleri yönetmek ve önbelleğe almak için kullanılır. API, kullanıcıların seçtikleri şehirler için hava durumu bilgilerini almaları için bir arayüz sağlar. Kullanıcılar API'ye bir istekte bulunarak, belirledikleri şehir için güncel hava durumu verilerine erişebilirler. API, istekleri işleyerek hava durumu verilerini kaynaklardan alır, işler ve kullanıcıya JSON formatında yanıt verir. Bu API, modern web uygulamaları için hava durumu verilerine erişim sağlamak üzere tasarlanmıştır.

## Teknolojiler ve Paketler

- phosphor-icons/react
- apexcharts
- axios
- classnames
- framer-motion
- react
- react-apexcharts
- react-dom
- react-hot-toast
- react-query
- react-router-dom
- react-tabs
- react-use
- zustand-
