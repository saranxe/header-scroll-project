import { useState, useRef } from 'react';
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

  const [currentMenuCategory, setCurrentMenuCategory] = useState(0);
  const menuScrollRef = useRef<HTMLDivElement>(null);

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

  const scrollMenu = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentMenuCategory(prev => (prev > 0 ? prev - 1 : menuCategories.length - 1));
    } else {
      setCurrentMenuCategory(prev => (prev < menuCategories.length - 1 ? prev + 1 : 0));
    }
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

            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-5xl text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Южная ночь
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Аутентичная среднеазиатская кухня в сердце города
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Традиционные рецепты, свежие продукты и атмосфера восточного гостеприимства
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('menu')}
              className="gap-2"
            >
              <Icon name="UtensilsCrossed" size={20} />
              Посмотреть меню
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('order')}
            >
              Заказать банкет
            </Button>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Местоположение</h3>
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">О ресторане</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Уютная атмосфера и настоящие восточные традиции
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Users" size={40} className="mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">60 посадочных мест</h4>
              <p className="text-muted-foreground">Просторный зал для комфортного отдыха</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="UtensilsCrossed" size={40} className="mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">Среднеазиатская кухня</h4>
              <p className="text-muted-foreground">Традиционные блюда по семейным рецептам</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Heart" size={40} className="mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">Домашняя атмосфера</h4>
              <p className="text-muted-foreground">Восточное гостеприимство и уют</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Наше меню</h3>
          <p className="text-center text-muted-foreground mb-12">
            Популярные блюда восточной кухни
          </p>
          
          <div className="relative">
            <button 
              onClick={() => scrollMenu('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-background transition-all"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button 
              onClick={() => scrollMenu('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-background transition-all"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            <div className="overflow-hidden px-12">
              <div 
                ref={menuScrollRef}
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentMenuCategory * 100}%)` }}
              >
                <div className="flex">
                  {menuCategories.map((category, catIndex) => (
                    <div key={catIndex} className="w-full flex-shrink-0">
                      <div className="mb-8">
                        <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                          <img 
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <h4 className="text-3xl font-bold text-white p-6">{category.name}</h4>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.items.map((item, itemIndex) => (
                            <Card key={itemIndex} className="p-6 hover:shadow-lg transition-shadow">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="text-lg font-semibold">{item.name}</h5>
                                <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">{item.price}</span>
                              </div>
                              <p className="text-muted-foreground text-sm">{item.description}</p>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {menuCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMenuCategory(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentMenuCategory === index ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Оформить заказ</h3>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и мы свяжемся с вами через WhatsApp
          </p>
          <Card className="p-8">
            <div className="space-y-6">
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

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h3>
          <p className="text-muted-foreground mb-8">
            Свяжитесь с нами удобным способом
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
            <Button size="lg" className="gap-2">
              <Icon name="MessageCircle" size={20} />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Южная ночь</h4>
              <p className="text-sm opacity-90">Ресторан среднеазиатской кухни</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <p className="text-sm opacity-90">+7 (999) 999-99-99</p>
              <p className="text-sm opacity-90">info@southernnight.ru</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Время работы</h4>
              <p className="text-sm opacity-90">Ежедневно 11:00 - 23:00</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Index;