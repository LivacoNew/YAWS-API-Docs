<script>
    import ContentSection from "../formatting/ContentSection.vue";
    import ContentHighlight from "../formatting/ContentHighlight.vue";
    import ContentLink from "../formatting/ContentLink.vue";
    import CodeBlock from "../formatting/CodeBlock.vue";
    import CodeInline from "../formatting/CodeInline.vue";
    import Warning from "../formatting/Warning.vue";

    export default {
        components: {
            ContentSection,
            ContentHighlight,
            ContentLink,
            CodeBlock,
            CodeInline,
            Warning
        }
    };
</script>

<template>
    <h1 class="text-3xl font-bold mb-4" id="section-introduction">Introduction</h1>

    <ContentSection title="Yet Another Warning System" id="intro-yaws">
        <p>Welcome to the Lua API documentation for Yet Another Warning System.</p>
        <p>As of version <ContentHighlight>2.0.0</ContentHighlight>, YAWS provides a Developer API for anybody who wishes to provide additional functionality without having to dive into YAWS's internal functions. The entire point of the API is to allow you to work with YAWS in a simpler way, without having to handle 500 different internal events.</p>
        <p>You can still access internal functions <ContentHighlight>at your own risk</ContentHighlight>, however it's not reccomended as <ContentHighlight>they are not documented.</ContentHighlight></p>

        <p class="mt-4">Some quick usage notes:</p>
        <ul class="list-disc list-inside mt-4">
            <li><ContentHighlight>Every single thing you see here is Serverside. There are zero clientside API functions.</ContentHighlight></li>
            <li>While SteamID's are accepted in SteamID fields/parameters, internally the API will change these into a SteamID64. What this means is if you can access the SteamID64 without using util.SteamIDTo64, then use that instead.</li>
        </ul>

        <p class="mt-4">If you do not know what Yet Another Warning System is, you may find it on Gmodstore <ContentLink href="https://www.gmodstore.com/market/view/yet-another-warning-system-yaws-user-warning-and-punishment-system">here</ContentLink>.</p>
        <p>If you're developing and are struggling, come join <ContentLink href="https://discord.gg/BSC4ZuD">My Discord Server</ContentLink>, where you can get help from either me or one of the other nerd programmers in there.</p>
            
        <p class="mt-4">Published something public to use? Cool! Let me know, I'll add it to a list for server owners to see and download!</p>

        <p class="mt-1">Last update to documentation: 20/12/2022</p>
    </ContentSection>

    <ContentSection title="Async Usage" id="intro-async">
        <p>YAWS uses a Async promise library called <ContentLink href="https://github.com/brianhang/deferred-lua">deferred-lua</ContentLink> for handling operations related to fetching information from databases. You will have to use this in order to perform some actions in the API. Don't panic, all of those functions are marked as Async in these docs so you can see what ones you need to worry about!</p>
        <p>A basic example of using the library can be seen as follows:</p>

        <CodeBlock>
            -- Would fetch Livaco's YAWS player information.
            YAWS.API.GetPlayerInformation("STEAM_0:1:80376292")     -- Call the function to query the database. 
                :next(function(data)                                -- Once that query has found something. "data" is whatever it found.
                    if(!data) then
                        print("Player not found.")
                        return
                    end

                    print("Player found!")
                    PrintTable(data)
                end)
                :catch(function(err)                                -- If something went wrong and theres an error. "err" is the error message.
                    print("Error fetching player: " .. err)
                end)
        </CodeBlock>

        <p><CodeInline>:next</CodeInline> should be passed the function that will handle the data returned. <CodeInline>:catch</CodeInline> should be for error handling.</p>
        <p>You should ensure that your user is aware that the addon is waiting for a response, via a Loading Screen or some kind of message.</p>
        <p class="mt-4">Error tracing in async's :catch: might be a bit undetailed. For this, YAWS provides the <CodeInline>YAWS.Core.Trace("Name of Trace", ErrorData)</CodeInline> function to be used inside it, like so:</p>
        <CodeBlock>
            :catch(function(err)
                YAWS.Core.Trace("My Player Fetch", err)
            end)
        </CodeBlock>
        <img src="https://upload.livaco.dev/u/rjZBKFC9se.png" />
        <p class="mt-4">Still unsure? Ask someone who does know what they're doing to explain it better than I ever could.</p>
    </ContentSection>

    <ContentSection title="Some Ground Rules" id="intro-rules">
        <p>Of course, within the Garry's Mod community come assholes that just want to ruin peoples fun, exploit people and ruin servers. As comes with this, we need to make a few rules to ensure servers don't install malicious addons.</p>
        <ul class="list-disc list-inside mt-4">
            <li class="my-2"><ContentHighlight>Your addons/modifications MUST be free if published.</ContentHighlight> Making your own modifications to your own server is fine, however if you are publishing them they must be free to use and open source. The only exception to this rule is if you are accessing the API to add support to your own unique gmodstore addon, at which point you should message me to confirm.</li>
            <li class="my-2"><ContentHighlight>You shouldn't try to make anything without owning the addon.</ContentHighlight> You need to be able to test your modification, and not owning the addon means you can't. Simple.</li>
            <li class="my-2"><ContentHighlight>No malicous code.</ContentHighlight> Backdoors, server killers, etc. Duh.</li>
            <li class="my-2"><ContentHighlight>Your addon/modiciation must be as secure as possible.</ContentHighlight> This is an administration mod after all, if it's not secure people can exploit and and perform actions that aren't allowed. Validate everything, never trust the client, etc. If you aren't sure on how to make a secure addon, <ContentHighlight>don't fucking try to make anything.</ContentHighlight></li>
        </ul>

        <p class="mt-10">Some other good practices you should probably follow, but aren't enforced:</p>
        <ul class="list-disc list-inside mt-4">
            <li class="my-2"><ContentHighlight>Confirm the Version.</ContentHighlight> The addon API could change in the future, and your addon could easily break if the server owner updates their addon before yours is ready. Add a simple version check that stops your addon from running if it's not the version it's expecting.<br>
            You can easily fetch the current version using the following variables:
            <Warning class="my-4">These variables will not be present in versions before 2.0.0. Check if any of these are nil before actual version checking.</Warning>
            <CodeBlock>
                print(YAWS.Version.Major)     -- 2
                print(YAWS.Version.Minor)     -- 0
                print(YAWS.Version.Patch)     -- 0
                print(YAWS.Version.Suffix)    -- "Stable"
                print(YAWS.Version.Release)   -- "2.0.0 (Stable)"
            </CodeBlock>
            </li>
        </ul>
    </ContentSection>
</template>
