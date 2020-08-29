import {
  ClientProviderOptions,
  RmqOptions,
  Transport,
} from '@nestjs/microservices';

const burgerQueue = 'burger';
const recoveryQueue = 'recovery';

// setup the RabbitMQ connection
const rmqOptions: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://guest:guest@localhost:5672'],
  },
};

const burger: ClientProviderOptions = {
  ...rmqOptions,
  // injection token for our RabbitMQ client
  name: burgerQueue,
  options: {
    ...rmqOptions.options,
    // actual RabbitMQ queue name
    queue: burgerQueue,
    // require explicit acknowledgement of messages
    noAck: false,
    queueOptions: {
      // setup the dead letter exchange to point to the default exchange
      deadLetterExchange: '',
      // all dead letters should be routed to our recoveryQueue
      deadLetterRoutingKey: recoveryQueue,
      // set message time to live to 4s
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
