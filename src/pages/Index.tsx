import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrder = () => {
    const text = `Здравствуйте! Меня зовут ${orderForm.name}.\nТелефон: ${orderForm.phone}\n${orderForm.message}`;
    window.open(`https://wa.me/79913251111?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+79913251111';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79913251111?text=Здравствуйте! Хочу заказать блюдо', '_blank');
  };

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const menuCategories = [
    {
      name: 'Комплексный обед',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      items: [
        { name: 'Обед №1', description: 'Суп + Второе + Салат + Напиток', price: '450 ₽', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80' },
        { name: 'Обед №2', description: 'Плов + Салат + Чай', price: '500 ₽', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
        { name: 'Обед №3', description: 'Лагман + Самса + Напиток', price: '520 ₽', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80' }
      ]
    },
    {
      name: 'Основное меню',
      image: 'https://cdn.poehali.dev/projects/62c59828-fd54-41ce-bde1-5be26c704956/files/6d754689-9882-4b51-aa50-1f5c4b7dd178.jpg',
      items: [
        { name: 'Плов с бараниной', description: 'Ароматный рис с нежной бараниной, морковью и нутом', price: '850 ₽', image: 'https://cdn.poehali.dev/projects/62c59828-fd54-41ce-bde1-5be26c704956/files/6d754689-9882-4b51-aa50-1f5c4b7dd178.jpg' },
        { name: 'Шашлык из баранины', description: 'Сочные кусочки мяса, маринованные в специях', price: '1200 ₽', image: 'https://cdn.poehali.dev/projects/62c59828-fd54-41ce-bde1-5be26c704956/files/dbfbb6bb-d211-4406-aa78-1b2a3d1e2f25.jpg' },
        { name: 'Лагман', description: 'Домашняя лапша с мясом и овощами в пряном бульоне', price: '650 ₽', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80' },
        { name: 'Манты', description: 'Паровые пельмени с бараниной и луком', price: '550 ₽', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80' },
        { name: 'Шурпа', description: 'Наваристый суп с бараниной и овощами', price: '450 ₽', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80' }
      ]
    },
    {
      name: 'Десерты',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
      items: [
        { name: 'Пахлава', description: 'Слоеное тесто с орехами и медом', price: '250 ₽', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80' },
        { name: 'Чак-чак', description: 'Традиционная сладость с медом', price: '200 ₽', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80' },
        { name: 'Халва', description: 'Восточная сладость из кунжута', price: '180 ₽', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80' }
      ]
    },
    {
      name: 'Выпечка',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
      items: [
        { name: 'Самса с мясом', description: 'Хрустящие слоеные пирожки с сочной начинкой', price: '200 ₽', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80' },
        { name: 'Самса с тыквой', description: 'Вегетарианский вариант с ароматной тыквой', price: '150 ₽', image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&q=80' },
        { name: 'Лепешка тандырная', description: 'Свежая лепешка из тандыра', price: '80 ₽', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80' }
      ]
    },
    {
      name: 'Банкетное меню',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
      items: [
        { name: 'Банкет Стандарт', description: 'Ассорти закусок, плов, шашлык, салаты', price: '2500 ₽/чел', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80' },
        { name: 'Банкет Премиум', description: 'Расширенное меню с деликатесами', price: '3500 ₽/чел', image: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&q=80' },
        { name: 'Фуршет', description: 'Легкие закуски и напитки', price: '1500 ₽/чел', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80' }
      ]
    },
    {
      name: 'Шаверма',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80',
      items: [
        { name: 'Шаверма с курицей', description: 'Сочная курица с овощами в лаваше', price: '350 ₽', image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80' },
        { name: 'Шаверма с говядиной', description: 'Говядина с фирменным соусом', price: '400 ₽', image: 'https://images.unsplash.com/photo-1599974168928-3fce48e5f028?w=800&q=80' },
        { name: 'Шаверма вегетарианская', description: 'Овощи и сыр фета', price: '300 ₽', image: 'https://images.unsplash.com/photo-1592415499556-fa132b589e16?w=800&q=80' }
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Южная ночь</h1>
            
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="https://eda.yandex.ru/r/uznaa-noc?placeSlug=yuzhnaya_noch_2jp37" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Icon name="ShoppingBag" size={18} />
                Мы в Яндекс Доставке
              </a>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-sm hover:text-primary transition-colors"
              >
                Меню
              </button>
              <button 
                onClick={() => scrollToSection('order')}
                className="text-sm hover:text-primary transition-colors"
              >
                Заказать банкет
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-sm hover:text-primary transition-colors"
              >
                Местоположение
              </button>
            </nav>

            <Button 
              size="sm"
              onClick={() => scrollToSection('order')}
              className="hidden md:flex"
            >
              Заказать
            </Button>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="flex flex-col p-4 space-y-3">
              <a 
                href="https://eda.yandex.ru/r/uznaa-noc?placeSlug=yuzhnaya_noch_2jp37" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon name="ShoppingBag" size={18} />
                Мы в Яндекс Доставке
              </a>
              <button 
                onClick={() => { scrollToSection('menu'); setMobileMenuOpen(false); }}
                className="text-sm text-left py-2 hover:text-primary transition-colors"
              >
                Меню
              </button>
              <button 
                onClick={() => { scrollToSection('order'); setMobileMenuOpen(false); }}
                className="text-sm text-left py-2 hover:text-primary transition-colors"
              >
                Заказать банкет
              </button>
              <button 
                onClick={() => { scrollToSection('location'); setMobileMenuOpen(false); }}
                className="text-sm text-left py-2 hover:text-primary transition-colors"
              >
                Местоположение
              </button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative pt-24 pb-12 md:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/62c59828-fd54-41ce-bde1-5be26c704956/files/60650c26-489c-40e3-95d4-af1a685e11de.jpg"
            alt="Ресторан Южная ночь"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center animate-fade-in relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground">
            Южная ночь
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 md:mb-4 max-w-2xl mx-auto px-4">
            Аутентичная среднеазиатская кухня в сердце города
          </p>
          <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Традиционные рецепты, свежие продукты и атмосфера восточного гостеприимства
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button 
              size="lg"
              onClick={() => navigate('/order')}
              className="gap-2 w-full sm:w-auto"
            >
              <Icon name="ShoppingCart" size={20} />
              Оформить заказ
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('menu')}
              className="w-full sm:w-auto"
            >
              <Icon name="UtensilsCrossed" size={20} />
              Посмотреть меню
            </Button>
          </div>
        </div>
      </section>

      <section id="location" className="py-12 md:py-20 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Местоположение</h3>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 order-2 md:order-1">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">ул. Курчатова, 9Б</p>
                  <a 
                    href="https://yandex.ru/maps/?text=ул.%20Курчатова%2C%209Б" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm flex items-center gap-1 mt-1"
                  >
                    <Icon name="ExternalLink" size={14} />
                    Открыть в Яндекс.Картах
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Режим работы</h4>
                  <p className="text-muted-foreground">Ежедневно с 11:00 до 23:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (991) 325-11-11</p>
                </div>
              </div>
            </div>
            <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755819&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE4MDE1MhI_0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JrRg9GA0YfQsNGC0L7QstCwLCA50JEiCg1jkhxCFUouWkI%2C&z=16&pt=37.617635,55.755819,pm2rdm"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">О ресторане</h3>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Уютная атмосфера и настоящие восточные традиции
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Users" size={32} className="mx-auto mb-3 md:mb-4 text-primary" />
              <h4 className="text-base md:text-xl font-semibold mb-1 md:mb-2">60 посадочных мест</h4>
              <p className="text-muted-foreground text-xs md:text-base">Просторный зал для комфортного отдыха</p>
            </Card>
            <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="UtensilsCrossed" size={32} className="mx-auto mb-3 md:mb-4 text-primary" />
              <h4 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Среднеазиатская кухня</h4>
              <p className="text-muted-foreground text-xs md:text-base">Традиционные блюда по семейным рецептам</p>
            </Card>
            <Card className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
              <Icon name="Heart" size={32} className="mx-auto mb-3 md:mb-4 text-primary" />
              <h4 className="text-base md:text-xl font-semibold mb-1 md:mb-2">Домашняя атмосфера</h4>
              <p className="text-muted-foreground text-xs md:text-base">Восточное гостеприимство и уют</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-12 md:py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">Наше меню</h3>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-sm md:text-base">
            Популярные блюда восточной кухни
          </p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => toggleCategory(0)}
                className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                <img 
                  src={menuCategories[0].image}
                  alt={menuCategories[0].name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="w-full p-4 md:p-6 flex justify-between items-center">
                    <h4 className="text-xl md:text-2xl font-bold text-white">{menuCategories[0].name}</h4>
                    <Icon 
                      name={expandedCategory === 0 ? "ChevronUp" : "ChevronDown"} 
                      size={24} 
                      className="text-white"
                    />
                  </div>
                </div>
              </button>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ${
              expandedCategory === 0 ? 'max-h-[2000px]' : 'max-h-0'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
                {menuCategories[0].items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h5 className="text-lg font-semibold mb-2">{item.name}</h5>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">{item.price}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuCategories.slice(1).map((category, index) => (
                <div key={index + 1}>
                  <button
                    onClick={() => toggleCategory(index + 1)}
                    className="w-full relative h-48 md:h-56 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all"
                  >
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                      <div className="w-full p-4 flex justify-between items-center">
                        <h4 className="text-lg md:text-xl font-bold text-white">{category.name}</h4>
                        <Icon 
                          name={expandedCategory === index + 1 ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                          className="text-white"
                        />
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedCategory === index + 1 ? 'max-h-[2000px] mt-4' : 'max-h-0'
                  }`}>
                    <div className="space-y-3 pb-4">
                      {category.items.map((item, itemIndex) => (
                        <Card key={itemIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="flex gap-4">
                            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                              <img 
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 p-4 flex flex-col justify-between">
                              <div>
                                <h5 className="text-base md:text-lg font-semibold mb-1">{item.name}</h5>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                              </div>
                              <span className="text-lg font-bold text-primary mt-2">{item.price}</span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">Оформить заказ</h3>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-sm md:text-base">
            Заполните форму, и мы свяжемся с вами через WhatsApp
          </p>
          <Card className="p-4 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов"
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  placeholder="+7 (999) 999-99-99"
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем заказе: количество гостей, дата, пожелания по меню..."
                  rows={5}
                  value={orderForm.message}
                  onChange={(e) => setOrderForm({ ...orderForm, message: e.target.value })}
                />
              </div>
              <Button 
                size="lg" 
                className="w-full gap-2"
                onClick={handleOrder}
              >
                <Icon name="MessageCircle" size={20} />
                Отправить заказ в WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-card">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Остались вопросы?</h3>
          <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
            Свяжитесь с нами удобным способом
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 w-full sm:w-auto"
              onClick={handleCallClick}
            >
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
            <Button 
              size="lg" 
              className="gap-2 w-full sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              <Icon name="MessageCircle" size={20} />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Южная ночь</h4>
              <p className="text-xs md:text-sm opacity-90">Ресторан среднеазиатской кухни</p>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Контакты</h4>
              <p className="text-xs md:text-sm opacity-90">+7 (991) 325-11-11</p>
              <p className="text-xs md:text-sm opacity-90">info@southernnight.ru</p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Время работы</h4>
              <p className="text-xs md:text-sm opacity-90">Ежедневно 11:00 - 23:00</p>
            </div>
          </div>

        </div>
      </footer>

      <button
        onClick={handleCallClick}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 flex items-center gap-2"
      >
        <Icon name="Phone" size={24} />
        <span className="hidden sm:inline font-semibold">Позвонить</span>
      </button>
    </div>
  );
};

export default Index;