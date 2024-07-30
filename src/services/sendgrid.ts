class EmailSenderService extends medusa-plugin-sendgrid {
    // ...
    async sendNotification(
      event: string,
      data: any,
      attachmentGenerator: unknown
    ): Promise<{
        to: string;
        status: string;
        data: Record<string, unknown>;
      }> {
      if (event === "order.placed") {
        // retrieve order
        const order = await this.orderService.retrieve(data.id)
        // TODO send email
  
        console.log("Notification sent")
        return {
          to: order.email,
          status: "done",
          data: {
            // any data necessary to send the email
            // for example:
            subject: "Você recebeu um novo pedido!",
            items: order.items,
          },
        }
      }
    }
}