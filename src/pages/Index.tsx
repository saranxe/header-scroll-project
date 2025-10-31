import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
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
    window.open(`https://wa.me/79999999999?text=${encodeURIComponent(text)}`, '_blank');
  };

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const menuCategories = [
    {
      name: 'Комплексный обед',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      items: [
        { name: 'Обед №1', description: 'Суп + Второе + Салат + Напиток', price: '450 ₽' },
        { name: 'Обед №2', description: 'Плов + Салат + Чай', price: '500 ₽' },
        { name: 'Обед №3', description: 'Лагман + Самса + Напиток', price: '520 ₽' }
      ]
    },
    {
      name: 'Основное меню',
      image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&q=80',
      items: [
        { name: 'Плов с бараниной', description: 'Ароматный рис с нежной бараниной, морковью и нутом', price: '850 ₽' },
        { name: 'Шашлык из баранины', description: 'Сочные кусочки мяса, маринованные в специях', price: '1200 ₽' },
        { name: 'Лагман', description: 'Домашняя лапша с мясом и овощами в пряном бульоне', price: '650 ₽' },
        { name: 'Манты', description: 'Паровые пельмени с бараниной и луком', price: '550 ₽' },
        { name: 'Шурпа', description: 'Наваристый суп с бараниной и овощами', price: '450 ₽' }
      ]
    },
    {
      name: 'Десерты',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
      items: [
        { name: 'Пахлава', description: 'Слоеное тесто с орехами и медом', price: '250 ₽' },
        { name: 'Чак-чак', description: 'Традиционная сладость с медом', price: '200 ₽' },
        { name: 'Халва', description: 'Восточная сладость из кунжута', price: '180 ₽' }
      ]
    },
    {
      name: 'Выпечка',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
      items: [
        { name: 'Самса с мясом', description: 'Хрустящие слоеные пирожки с сочной начинкой', price: '200 ₽' },
        { name: 'Самса с тыквой', description: 'Вегетарианский вариант с ароматной тыквой', price: '150 ₽' },
        { name: 'Лепешка тандырная', description: 'Свежая лепешка из тандыра', price: '80 ₽' }
      ]
    },
    {
      name: 'Банкетное меню',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
      items: [
        { name: 'Банкет Стандарт', description: 'Ассорти закусок, плов, шашлык, салаты', price: '2500 ₽/чел' },
        { name: 'Банкет Премиум', description: 'Расширенное меню с деликатесами', price: '3500 ₽/чел' },
        { name: 'Фуршет', description: 'Легкие закуски и напитки', price: '1500 ₽/чел' }
      ]
    },
    {
      name: 'Шаверма',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80',
      items: [
        { name: 'Шаверма с курицей', description: 'Сочная курица с овощами в лаваше', price: '350 ₽' },
        { name: 'Шаверма с говядиной', description: 'Говядина с фирменным соусом', price: '400 ₽' },
        { name: 'Шаверма вегетарианская', description: 'Овощи и сыр фета', price: '300 ₽' }
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

      <section className="pt-24 pb-12 md:pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-5xl text-center animate-fade-in">
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
              onClick={() => scrollToSection('menu')}
              className="gap-2 w-full sm:w-auto"
            >
              <Icon name="UtensilsCrossed" size={20} />
              Посмотреть меню
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('order')}
              className="w-full sm:w-auto"
            >
              Заказать банкет
            </Button>
          </div>
        </div>
      </section>

      <section id="location" className="py-12 md:py-20 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Местоположение</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">ул. Примерная, д. 123, Москва</p>
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
                  <p className="text-muted-foreground">+7 (999) 999-99-99</p>
                </div>
              </div>
            </div>
            <div className="h-[300px] bg-muted rounded-lg flex items-center justify-center">
              <Icon name="Map" size={48} className="text-muted-foreground" />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {menuCategories.map((category, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full relative h-40 md:h-56 rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="w-full p-3 md:p-6 flex justify-between items-center">
                      <h4 className="text-lg md:text-2xl font-bold text-white">{category.name}</h4>
                      <Icon 
                        name={expandedCategory === index ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-white transition-transform md:w-6 md:h-6"
                      />
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedCategory === index ? 'max-h-[2000px] mt-3 md:mt-4' : 'max-h-0'
                }`}>
                  <div className="space-y-2 md:space-y-3 pb-3 md:pb-4">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="p-3 md:p-4 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start gap-2 md:gap-3">
                          <div className="flex-1">
                            <h5 className="text-sm md:text-lg font-semibold mb-0.5 md:mb-1">{item.name}</h5>
                            <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
                          </div>
                          <span className="text-sm md:text-lg font-bold text-primary whitespace-nowrap">{item.price}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
            <Button size="lg" className="gap-2 w-full sm:w-auto">
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
              <p className="text-xs md:text-sm opacity-90">+7 (999) 999-99-99</p>
              <p className="text-xs md:text-sm opacity-90">info@southernnight.ru</p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Время работы</h4>
              <p className="text-xs md:text-sm opacity-90">Ежедневно 11:00 - 23:00</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Index;