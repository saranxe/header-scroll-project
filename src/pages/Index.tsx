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

  const menuItems = [
    {
      name: 'Плов с бараниной',
      description: 'Ароматный рис с нежной бараниной, морковью и нутом',
      price: '850 ₽',
      image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&q=80'
    },
    {
      name: 'Шашлык из баранины',
      description: 'Сочные кусочки мяса, маринованные в специях',
      price: '1200 ₽',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80'
    },
    {
      name: 'Лагман',
      description: 'Домашняя лапша с мясом и овощами в пряном бульоне',
      price: '650 ₽',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80'
    },
    {
      name: 'Самса с мясом',
      description: 'Хрустящие слоеные пирожки с сочной начинкой',
      price: '200 ₽',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80'
    },
    {
      name: 'Манты',
      description: 'Паровые пельмени с бараниной и луком',
      price: '550 ₽',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80'
    },
    {
      name: 'Шурпа',
      description: 'Наваристый суп с бараниной и овощами',
      price: '450 ₽',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Южная ночь</h1>
            
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="https://eda.yandex.ru" 
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
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
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
            <p>Ключевые слова: плов, шашлык, лагман, манты, самса, среднеазиатская кухня, восточная кухня, узбекская кухня, банкет, доставка еды</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;