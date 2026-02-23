function resolveWebhookUrl() {
  const webhookUrl =
    "https://script.google.com/macros/s/AKfycbwNDqygwwo3bKjTlEY0OMp9SuQkpeora-TzM_Mbj64_kF5A6FSmG8YvsFIl7hNWUBkjSg/exec";
  return { ok: true, url: webhookUrl };
}

export async function POST(request) {
  try {
    const body = await request.json();

    const requiredFields = [
      "username",
      "email",
      "phone",
      "subject",
      "preferredDestination",
      "studyLevel",
      "intake",
    ];

    for (const field of requiredFields) {
      if (!body?.[field] || String(body[field]).trim() === "") {
        return Response.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const webhook = resolveWebhookUrl();
    if (!webhook.ok) {
      return Response.json({ message: webhook.message }, { status: 500 });
    }

    const payload = {
      submittedAt: new Date().toISOString(),
      username: body.username,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      preferredDestination: body.preferredDestination,
      studyLevel: body.studyLevel,
      intake: body.intake,
      message: body.message || "",
      source: "website-contact-form",
    };

    const sheetsResponse = await fetch(webhook.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!sheetsResponse.ok) {
      return Response.json(
        { message: "Google Sheets endpoint returned an error." },
        { status: 502 }
      );
    }

    return Response.json({ message: "Submitted successfully." }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Unexpected error while submitting form." },
      { status: 500 }
    );
  }
}
