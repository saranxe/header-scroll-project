import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  category: string;
  image?: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Order = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [address, setAddress] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    comment: '',
    fullAddress: '',
    cutleryCount: '1',
    paymentMethod: 'cash' as 'cash' | 'card'
  });

  const menuCategories = [
    {
      name: 'Комплексный обед',
      items: [
        { id: '1', name: 'Обед №1', description: 'Суп + Второе + Салат + Напиток', price: '450 ₽', priceValue: 450 },
        { id: '2', name: 'Обед №2', description: 'Плов + Салат + Чай', price: '500 ₽', priceValue: 500 },
        { id: '3', name: 'Обед №3', description: 'Лагман + Самса + Напиток', price: '520 ₽', priceValue: 520 }
      ]
    },
    {
      name: 'Основное меню',
      items: [
        { id: '4', name: 'Плов с бараниной', description: 'Ароматный рис с нежной бараниной', price: '850 ₽', priceValue: 850, image: 'https://cdn.poehali.dev/projects/62c59828-fd54-41ce-bde1-5be26c704956/files/6d754689-9882-4b51-aa50-1f5c4b7dd178.jpg' },
        { id: '5', name: 'Шашлык из баранины', description: 'Сочные кусочки мяса', price: '1200 ₽', priceValue: 1200, image: 'https://cdn.poehali.dev/projects/62c59828-fd54-41ce-bde1-5be26c704956/files/dbfbb6bb-d211-4406-aa78-1b2a3d1e2f25.jpg' },
        { id: '6', name: 'Лагман', description: 'Домашняя лапша с мясом', price: '650 ₽', priceValue: 650 },
        { id: '7', name: 'Манты', description: 'Паровые пельмени с бараниной', price: '550 ₽', priceValue: 550 },
        { id: '8', name: 'Шурпа', description: 'Наваристый суп с бараниной', price: '450 ₽', priceValue: 450 }
      ]
    },
    {
      name: 'Десерты',
      items: [
        { id: '9', name: 'Пахлава', description: 'Слоеное тесто с орехами и медом', price: '250 ₽', priceValue: 250 },
        { id: '10', name: 'Чак-чак', description: 'Традиционная сладость с медом', price: '200 ₽', priceValue: 200 },
        { id: '11', name: 'Халва', description: 'Восточная сладость из кунжута', price: '180 ₽', priceValue: 180 }
      ]
    },
    {
      name: 'Выпечка',
      items: [
        { id: '12', name: 'Самса с мясом', description: 'Хрустящие слоеные пирожки', price: '200 ₽', priceValue: 200 },
        { id: '13', name: 'Самса с тыквой', description: 'Вегетарианский вариант', price: '150 ₽', priceValue: 150 },
        { id: '14', name: 'Лепешка тандырная', description: 'Свежая лепешка из тандыра', price: '80 ₽', priceValue: 80 }
      ]
    },
    {
      name: 'Банкетное меню',
      items: [
        { id: '15', name: 'Банкет Стандарт', description: 'Ассорти закусок, плов, шашлык', price: '2500 ₽', priceValue: 2500 },
        { id: '16', name: 'Банкет Премиум', description: 'Расширенное меню с деликатесами', price: '3500 ₽', priceValue: 3500 },
        { id: '17', name: 'Фуршет', description: 'Легкие закуски и напитки', price: '1500 ₽', priceValue: 1500 }
      ]
    },
    {
      name: 'Шаверма',
      items: [
        { id: '18', name: 'Шаверма с курицей', description: 'Сочная курица с овощами', price: '350 ₽', priceValue: 350 },
        { id: '19', name: 'Шаверма с говядиной', description: 'Говядина с фирменным соусом', price: '400 ₽', priceValue: 400 },
        { id: '20', name: 'Шаверма вегетарианская', description: 'Овощи и сыр фета', price: '300 ₽', priceValue: 300 }
      ]
    }
  ];

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: string) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== itemId));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);
  };

  const handleSubmitOrder = () => {
    const orderDetails = `
*Новый заказ из Южная ночь*

*Тип доставки:* ${deliveryType === 'delivery' ? 'Доставка курьером' : 'Самовывоз'}
${deliveryType === 'delivery' ? `*Адрес доставки:* ${customerData.fullAddress || address}` : ''}

*Заказ:*
${cart.map(item => `- ${item.name} x${item.quantity} = ${item.priceValue * item.quantity} ₽`).join('\n')}

*Итого:* ${getTotalPrice()} ₽

*Контактные данные:*
Имя: ${customerData.name}
Телефон: ${customerData.phone}
${customerData.comment ? `Комментарий: ${customerData.comment}` : ''}
Количество приборов: ${customerData.cutleryCount}

*Оплата:* ${customerData.paymentMethod === 'cash' ? 'Наличными' : 'Картой курьеру'}
    `.trim();

    window.open(`https://wa.me/79913251111?text=${encodeURIComponent(orderDetails)}`, '_blank');
  };

  const canProceedStep1 = deliveryType === 'pickup' || (deliveryType === 'delivery' && address.length > 0);
  const canProceedStep2 = cart.length > 0;
  const canProceedStep3 = customerData.name && customerData.phone;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icon name="ArrowLeft" size={20} />
              <h1 className="text-xl md:text-2xl font-bold text-primary">Южная ночь</h1>
            </button>
            <div className="flex items-center gap-2">
              <Icon name="ShoppingCart" size={20} className="text-primary" />
              <span className="font-semibold">{cart.length}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Оформление заказа</h2>
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                  step >= stepNumber ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > stepNumber ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Выберите способ получения</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setDeliveryType('delivery')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    deliveryType === 'delivery'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Icon name="Truck" size={32} className="mx-auto mb-2" />
                  <p className="font-semibold">Доставка курьером</p>
                </button>
                <button
                  onClick={() => setDeliveryType('pickup')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    deliveryType === 'pickup'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Icon name="Store" size={32} className="mx-auto mb-2" />
                  <p className="font-semibold">Самовывоз</p>
                  <p className="text-xs text-muted-foreground mt-1">ул. Курчатова, 9Б</p>
                </button>
              </div>

              {deliveryType === 'delivery' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Адрес доставки</label>
                  <Input
                    placeholder="Введите адрес..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mb-4"
                  />
                </div>
              )}
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold mb-3">Зона доставки</h4>
              <p className="text-sm text-muted-foreground mb-2">Зеленая зона — радиус 1 км от ресторана</p>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755819&z=14&l=map&pt=37.617635,55.755819,pm2rdm~37.617635,55.755819,round1000m~37.617635,55.755819,pm2rdl"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </Card>

            <Button
              size="lg"
              className="w-full"
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
            >
              Следующий шаг
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Выберите блюда</h3>
              {menuCategories.map((category, catIndex) => (
                <div key={catIndex} className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">{category.name}</h4>
                  <div className="grid gap-3">
                    {category.items.map((item) => {
                      const cartItem = cart.find(ci => ci.id === item.id);
                      const quantity = cartItem?.quantity || 0;

                      return (
                        <Card key={item.id} className="p-3">
                          <div className="flex gap-3 items-center">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            )}
                            <div className="flex-1">
                              <h5 className="font-semibold text-sm md:text-base">{item.name}</h5>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                              <p className="font-bold text-primary mt-1">{item.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {quantity > 0 ? (
                                <>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => removeFromCart(item.id)}
                                  >
                                    <Icon name="Minus" size={16} />
                                  </Button>
                                  <span className="font-semibold w-8 text-center">{quantity}</span>
                                  <Button
                                    size="sm"
                                    onClick={() => addToCart({ ...item, category: category.name })}
                                  >
                                    <Icon name="Plus" size={16} />
                                  </Button>
                                </>
                              ) : (
                                <Button
                                  size="sm"
                                  onClick={() => addToCart({ ...item, category: category.name })}
                                >
                                  <Icon name="Plus" size={16} />
                                </Button>
                              )}
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </Card>

            {cart.length > 0 && (
              <Card className="p-4 bg-primary/5">
                <h4 className="font-semibold mb-2">Ваш заказ</h4>
                <div className="space-y-1 text-sm">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-semibold">{item.priceValue * item.quantity} ₽</span>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-2 pt-2 flex justify-between font-bold">
                  <span>Итого:</span>
                  <span>{getTotalPrice()} ₽</span>
                </div>
              </Card>
            )}

            <div className="flex gap-3">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
              <Button
                size="lg"
                className="flex-1"
                onClick={() => setStep(3)}
                disabled={!canProceedStep2}
              >
                Следующий шаг
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Контактные данные</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={customerData.name}
                      onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input
                      placeholder="+7 (999) 999-99-99"
                      value={customerData.phone}
                      onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                    />
                  </div>
                  {deliveryType === 'delivery' && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Полный адрес доставки</label>
                      <Input
                        placeholder="Улица, дом, квартира, подъезд, этаж"
                        value={customerData.fullAddress}
                        onChange={(e) => setCustomerData({ ...customerData, fullAddress: e.target.value })}
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество приборов</label>
                    <Input
                      type="number"
                      min="1"
                      value={customerData.cutleryCount}
                      onChange={(e) => setCustomerData({ ...customerData, cutleryCount: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий к заказу</label>
                    <Textarea
                      placeholder="Дополнительные пожелания..."
                      rows={3}
                      value={customerData.comment}
                      onChange={(e) => setCustomerData({ ...customerData, comment: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Способ оплаты</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setCustomerData({ ...customerData, paymentMethod: 'cash' })}
                        className={`p-3 border-2 rounded-lg transition-all ${
                          customerData.paymentMethod === 'cash'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Icon name="Banknote" size={24} className="mx-auto mb-1" />
                        <p className="text-sm font-semibold">Наличными</p>
                      </button>
                      <button
                        onClick={() => setCustomerData({ ...customerData, paymentMethod: 'card' })}
                        className={`p-3 border-2 rounded-lg transition-all ${
                          customerData.paymentMethod === 'card'
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Icon name="CreditCard" size={24} className="mx-auto mb-1" />
                        <p className="text-sm font-semibold">Картой курьеру</p>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ваш заказ</h3>
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-start pb-2 border-b">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Количество: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">{item.priceValue * item.quantity} ₽</p>
                    </div>
                  ))}
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>Итого:</span>
                    <span className="text-primary">{getTotalPrice()} ₽</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex gap-3">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setStep(2)}
                className="flex-1"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
              <Button
                size="lg"
                className="flex-1"
                onClick={handleSubmitOrder}
                disabled={!canProceedStep3}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;