import {
  ClientProviderOptions,
  RmqOptions,
  Transport,
} from '@nestjs/microservices';

const burgerQueue = 'burger';
const recoveryQueue = 'recovery';

const rmqOptions: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://guest:guest@localhost:5672'],
  },
};

const burger: ClientProviderOptions = {
  ...rmqOptions,
  name: burgerQueue,
  options: {
    ...rmqOptions.options,
    queue: burgerQueue,
    noAck: false,
    queueOptions: {
      deadLetterExchange: '',
      deadLetterRoutingKey: recoveryQueue,
      messageTtl: 4000,
    },
  },
};

const recovery: ClientProviderOptions = {
  ...rmqOptions,
  name: recoveryQueue,
  options: {
    ...rmqOptions.options,
    queue: recoveryQueue,
    noAck: false,
  },
};

export const queueOptions = {
  burger,
  recovery,
};
